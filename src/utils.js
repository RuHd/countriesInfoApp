

export const filteredCountryList = (countries, searchTerm, chosenContinent) => {

    if (searchTerm.length >= 1) {
        return countries.countriesData.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) && (country.region === chosenContinent || chosenContinent === "Any"))
    }

    if (chosenContinent !== "Any") {
        return countries.countriesData.filter(country => country.region === chosenContinent)
    } else {
        return countries.countriesData
    }



}