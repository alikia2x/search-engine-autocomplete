Math.round = function (num, decimals = 0) {
    return roundToX(num, decimals);
};

function roundToX(num, decimals = 0) {
    const factor = 10 ** decimals;
    return Math.floor(num * factor + 0.5) / factor;
}

async function getAllSuggestionsGoogle(query) {
    const searchURL = "http://suggestqueries.google.com/complete/search?client=chrome&q=";
    try {
        const response = await fetch(searchURL + encodeURIComponent(query));
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const verbatimRelevance = result[4]["google:verbatimrelevance"];
        const suggestions = result[1].map((suggestion, index) => ({
            suggestion: suggestion,
            relativeRelevance: Math.round(result[4]["google:suggestrelevance"][index] / verbatimRelevance, 5),
            relevance: result[4]["google:suggestrelevance"][index],
            type: result[4]["google:suggesttype"][index],
        }));
        return {
            query: query,
            suggestions: suggestions,
            verbatimRelevance: verbatimRelevance,
        };
    } catch (error) {
        throw error;
    }
}

async function getQuerySuggestionsGoogle(string) {
    try {
        const suggestions = await getAllSuggestionsGoogle(string);
        const filtered = suggestions.filter((suggestion) => suggestion.type === "QUERY");
        return filtered;
    } catch (error) {
        throw error;
    }
}

export { getAllSuggestionsGoogle as getAllSuggestions, getQuerySuggestions };
