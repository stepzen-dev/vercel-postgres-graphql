import { loadEnvConfig } from '@next/env'
import { execSync } from 'child_process';
import { seed } from './seed';

const projectDir = process.cwd()
loadEnvConfig(projectDir)

function login() {
  try {
    if (!process.env.STEPZEN_ACCOUNT) {
      throw new Error('Environment variable STEPZEN_ACCOUNT is not set');
    }

    if (!process.env.STEPZEN_ADMIN_KEY) {
      throw new Error('Environment variable STEPZEN_ADMIN_KEY is not set');
    }

    const response = execSync(
      `stepzen login --account=${process.env.STEPZEN_ACCOUNT} --adminkey=${process.env.STEPZEN_ADMIN_KEY}`,
      {
        encoding: 'utf8',
      },
    ).toString();

    return {
      result: response,
    };
  } catch (error: any) {
    return { error: error.message };
  }
}

async function introspect() {
  if (!process.env.POSTGRES_URL_NON_POOLING) {
    console.error('Environment variables for Postgres are not set');
  }

  try {
    const response = execSync(`stepzen import ${process.env.POSTGRES_URL_NON_POOLING} --dir='./stepzen'`, {
      encoding: 'utf8',
    }).toString();

    return {
      result: response,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
}

async function deploy() {
  try {
    const response = execSync(`stepzen deploy --dir='./stepzen'`, {
      encoding: 'utf8',
    }).toString();

    return {
      result: response,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export async function setup() {
  const seedPostgres = await seed();

  if (!seedPostgres) {
    console.error('The Postgres database could not be seeded');
    return;
  }

  const isLoggedIn = login();

  if (!isLoggedIn) {
    console.error('StepZen could not be logged in');
    return;
  }

  const introspectPostgres = await introspect();

  if (!introspectPostgres) {
    console.error('StepZen could not introspect the Postgres database');
    return;
  }

  const deployEndpoint = await deploy();

  if (!deployEndpoint) {
    console.error('StepZen could not deploy the endpoint');
    return;
  }

  console.log('Finished setting up StepZen');
}

setup();