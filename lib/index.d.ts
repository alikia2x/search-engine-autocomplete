declare module "@alikia/search-complete" {
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

    function completeGoogle(query: string, lang?: string): Promise<Suggestions>;

    export { completeGoogle, Suggestion, Suggestions };
}
