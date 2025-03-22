import { test, expect } from "@playwright/test";

import dayjs from "dayjs";

test("dates", async ({ page }) => {
  const todaysDay = dayjs();
  let plus7days = todaysDay.add(7, 'd')
  console.log(plus7days.format("DD/MM/YYYY"));
});
