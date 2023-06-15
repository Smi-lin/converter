// Fethching the symbol data (currency option) from API endpoint

const getCurrencyOption = async () => {
    const optionUrl = 'https://api.exchangerate.host/symbols'; 
    const response = await fetch (optionUrl)
    const json = await response.json();

    return json.symbols
}

// getCurrencyOption().then(console.log)

// Fetching the currency rates (covert endpoints result) data from API endpoint

const getCurrencyRates = async (fromCurrency, toCurrency) => {
    const currencyConvertUrl = new URL ('https://api.exchangerate.host/convert')
    currencyConvertUrl.searchParams.append('from', fromCurrency);
    currencyConvertUrl.searchParams.append('to', toCurrency);

    const resp = await fetch (currencyConvertUrl)
    const json = await resp.json()

    return json.result
} 

// This function will create now option element and create  it for the select element being passed
// as an argument

const appendSelectOpt = (selctEl, optionItem) => {
    const optionEl = document.creteElement9('option')
    optionEl.value = optionItem.code;
    optionEl.textContent = optionItem.description;


    selctEl.appenChild(optionEl)
}