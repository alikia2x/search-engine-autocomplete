declare module "google-suggestions" {
    interface Suggestion {
        suggestion: string;
        relevance: string;
        type: string;
    }

    function getAllSuggestions(string: string): Promise<Suggestion[]>;
    function getQuerySuggestions(string: string): Promise<Suggestion[]>;

    export { getAllSuggestions, getQuerySuggestions };
}
