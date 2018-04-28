require("babel-polyfill");
require("regenerator-runtime");

import Ora from "ora";
import normalize from "normalize-url";
import got from "got";
import chalk from "chalk";
import printBlock from "@splash-cli/print-block";
import isMonth from "@splash-cli/is-month";

import { errorHandler } from "../extra/utils";

const spinner = new Ora({
  text: "Connecting to UNSPLASH",
  color: "yellow",
  spinner: isMonth("december") ? "christmas" : "earth"
});

export default async (downloadUrl, { quiet }) => {
  const url = normalize(downloadUrl);

  if (!quiet) {
    spinner.start();
  }

  try {
    const { body, statusCode, statusMessage } = await got(url);

    const photo = JSON.parse(body);

    if (!quiet) {
      spinner.text = "Connected";
      spinner.succeed();
    }

    return {
      data: photo,
      status: {
        statusCode,
        statusMessage
      }
    };
  } catch (err) {
    spinner.fail();

    if (err.statusCode === 401) {
      printBlock(
        chalk`{bold Invalid {underline access token}!} \n Please update it via "{yellow --token} {dim <token>}"`
      );
    } else {
      errorHandler(err);
    }

    process.exit();
    return err;
  }
};
