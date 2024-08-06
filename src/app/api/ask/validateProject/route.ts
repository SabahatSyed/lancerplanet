import { NextRequest, NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-EzqMU5oRG6IWw3XC1f4kkajY",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function GET(req: NextRequest) {
  const res = await openai.createChatCompletion({
    model: process.env.NEXT_PUBLIC_BASE_APP_CHAT_MODEL ?? "gpt-3.5-turbo-0301",
    messages: [
      {
        role: "user",
        content:
          "Your task is to write a poem on Javascript. Poem shoule be upto 20 words.",
      },
    ],
  });
  if (res.data) {
    const {
      data: { choices },
    } = res;

    return NextResponse.json({ status: "success", data: choices[0] });
  }
  return NextResponse.json({ status: "failed" });
}

export async function POST(req: NextRequest) {
  const { title, description } = await req.json();
  const prompt = {
    model: process.env.NEXT_PUBLIC_BASE_APP_CHAT_MODEL ?? "gpt-3.5-turbo-0301",
    messages: [
      {
        role: "system",
        content:
          "You are a project validator. Understand the requirements by user and give your answer in the form of JSON with valid keys.",
      },
      {
        role: "user",
        content: `
        -Your task is to validate a project posted on a freelance platform.
        -You should understand project title and description.
        -Check whether that the project title and description. 
        -Description should be clear , free from grammatical errors and gives clear understanding of the project.

        Project title is delimited in angle brackets and description is delimited in square brackets.

        Your answer should be in the form of json with keys {status,suggestion}. 
        Key status should have two values either <accepted> or <rejeceted> in string.
        Key suggestion should be empty if status value is accepted otherwise it contains problems and reason that caused project rejecton and suggestions that can improve project title and description.

        Job title:<${title}>

        Job description:<${description}>
        `,
      },
    ],
  };

  const res = await openai.createChatCompletion({
    model: process.env.NEXT_PUBLIC_BASE_APP_CHAT_MODEL ?? "gpt-3.5-turbo-0301",
    messages: [
      {
        role: "system",
        content:
          "You are a project validator. Understand the requirements by user and give your answer in the form of JSON with valid keys.",
      },
      {
        role: "user",
        content: `
        -Your task is to validate a project posted on a freelance platform.
        -You should understand project title and description.
        -Check whether that the project title and description. 
        -Description should be clear , free from grammatical errors and gives clear understanding of the project.

        Project title is delimited in angle brackets and description is delimited in square brackets.

        Your answer should be in the form of json with keys {status,suggestion}. 
        Key status should have two values either <accepted> or <rejeceted> in string.
        Key suggestion should be empty if status value is accepted otherwise it contains problems and reason that caused project rejecton and suggestions that can improve project title and description.

        Job title:<${title}>

        Job description:<${description}>
        `,
      },
    ],
  });

  if (res.data) {
    const { choices } = res.data;
    return NextResponse.json({ status: "success", data: choices[0] });
  }
  return NextResponse.json({ status: "failed" });
}
