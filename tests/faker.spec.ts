import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";

const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();

test("faker", async () => {
    console.log(randomName + " " + randomEmail)
});

test("faker check", async () => {
    console.log(randomName + " " + randomEmail)
});
