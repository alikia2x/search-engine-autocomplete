declare module "search-engine-autocomplete" {
    interface Suggestion {
        suggestion: string;
        relevance: number;
        relativeRelevance: number;
        type: string;
    }
    interface Suggestions {
        query: string;
        suggestions: Suggestion[];
        verbatimRelevance: number;
    }

    function completeGoogle(string: string): Promise<Suggestions>;

    export { completeGoogle };
}
