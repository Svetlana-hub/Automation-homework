const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.onliner.by/');
  });

test('testByCss', async ({ page }) => {
    await page.locator("css=g-top");
})

test('testByXpath', async ({ page }) => {
    await page.locator('xpath=//input');
})


test('filterByText', async ({ page }) => {
    await page
    .getByRole('header')
    .filter ({ hasText: 'ЗРОБЛЕНА БЕЛАРУСАМI'})
    .getByRole('link', { name: 'Каталог' })

})

test('filterByAnotherLocator', async ({ page }) => {
    await page
    .getByRole('header')
    .locator('css=b-main-page-tabs')
    .filter ( {has: page.locator('css=b-main-page-tabs_list')})
    .getByRole('link', { name: 'Помогаем выбрать' })
})

test('getNElement', async ({ page }) => {
    await page
    .locator('css=b-main-page-grid-4 b-main-page-news-2')
    .locator('css=b-main-page-grid-4 cfix')
    .getByRole('generic')
    .getByRole('listitem').nth(2);
})



