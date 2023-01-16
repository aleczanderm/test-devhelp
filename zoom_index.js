dictwords = ["chapter 0 18 160 5 18 160",
	"top 0 10 16 1 10 16 2 10 16 3 10 16 4 10 16 5 10 16 6 10 16",
	"previous 0 10 16 2 10 16 3 10 16 4 10 16 5 10 16 6 10 16",
	"next 0 10 16 1 10 16 3 10 16 4 10 16 5 10 16 6 10 16",
	"text 0 18 17 1 18 17 2 18 17 3 18 17 4 18 17 5 18 17 6 10 16",
	"scrambling 0 10 16 1 10 16 2 10 16 3 10 16 4 10 16 5 10 16 6 10 16",
	"trial 0 18 10 1 18 10 2 18 10 3 18 10 4 18 20 5 18 10 6 18 10",
	"version 0 18 10 1 18 10 2 18 10 3 18 10 4 18 12 5 18 10 6 18 10",
	"output 0 18 12 1 18 12 2 18 12 3 18 12 4 18 12 5 18 12 6 18 12",
	"evaluation 0 18 10 1 18 10 2 18 10 3 18 10 4 18 10 5 18 10 6 18 10",
	"mode 0 10 8 1 10 8 2 10 8 3 10 8 4 10 8 5 10 8 6 10 8",
	"help 0 26 11 1 26 11 2 26 11 3 26 11 4 26 10 5 26 10 6 26 11",
	"manual 0 18 9 1 18 9 2 18 9 3 18 9 4 18 10 5 18 9 6 18 9",
	"will 0 10 8 1 10 8 2 10 8 3 10 8 4 10 8 5 10 8 6 10 8",
	"scramble 0 10 8 1 10 8 2 10 8 3 10 8 4 10 8 5 10 8 6 10 8",
	"individual 0 10 8 1 10 8 2 10 8 3 10 8 4 10 8 5 10 8 6 10 8",
	"characters 0 10 4 1 10 4 2 10 4 3 10 4 4 10 8 5 10 4 6 10 4",
	"random 0 10 4 1 10 4 2 10 4 3 10 4 4 10 4 5 10 4 6 10 4",
	"words 0 10 4 1 10 4 2 10 4 3 10 4 4 10 4 5 10 4 6 10 4",
	"your 0 10 4 1 10 4 2 10 4 3 10 4 4 10 4 5 10 4 6 10 4",
	"published 0 10 4 1 10 4 2 10 4 3 10 4 4 10 4 5 10 4 6 10 4",
	"files 0 10 4 1 10 4 2 10 4 3 10 4 4 10 4 5 10 4 6 10 4",
	"this 0 18 6 1 18 6 2 18 6 3 18 6 4 18 6 5 18 6 6 18 6",
	"limitation 0 10 4 1 10 4 2 10 4 3 10 4 4 10 4 5 10 4 6 10 4",
	"free 0 10 2 1 10 2 2 10 2 3 10 2 4 10 4 5 10 2 6 10 2",
	"system 0 10 2 1 10 2 2 10 2 3 10 2 4 10 2 5 10 2 6 10 2",
	"was 0 10 2 1 10 2 2 10 2 3 10 2 4 10 2 5 10 2 6 10 2",
	"created 0 10 2 1 10 2 2 10 2 3 10 2 4 10 2 5 10 2 6 10 2",
	"copy 0 10 2 1 10 2 2 10 2 3 10 2 4 10 2 5 10 2 6 10 2",
	"enter 0 10 1 1 10 1 2 10 1 3 10 1 4 10 2 5 10 1",
	"topic 0 10 1 1 10 1 2 26 161 3 10 1 4 26 162 5 10 1 6 18 160",
	"here 0 10 1 1 10 1 2 10 1 3 10 1 4 10 1 5 10 1",
	"chapter-2.html 0 6 64",
	"introduction 1 18 160",
	"introduction.html 1 6 64",
	"new 2 18 160",
	"new-topic.html 2 6 64",
	"overview 3 18 160",
	"overview.html 3 6 64",
	"second 4 18 160",
	"testing 4 10 1 6 10 1",
	"script 4 10 1 6 10 1",
	"some 4 10 1",
	"more 4 10 1",
	"second-topic.html 4 6 64",
	"sub 5 18 160",
	"2.1 5 18 160",
	"sub-chapter-2_1.html 5 6 64",
	"welcome 6 18 160",
	"welcome-topic.html 6 6 64"];
skipwords = ["and",
	"or",
	"the",
	"it",
	"is",
	"an",
	"on",
	"we",
	"us",
	"to",
	"of",
	"has",
	"be",
	"all",
	"for",
	"in",
	"as",
	"so",
	"are",
	"that",
	"can",
	"you",
	"at",
	"its",
	"by",
	"have",
	"with",
	"into"];
var STR_FORM_SEARCHFOR = "Search for:";
var STR_FORM_SUBMIT_BUTTON = "Submit";
var STR_FORM_RESULTS_PER_PAGE = "Results per page:";
var STR_FORM_CATEGORY = "Category:";
var STR_FORM_CATEGORY_ALL = "All";
var STR_FORM_MATCH = "Match:";
var STR_FORM_ANY_SEARCH_WORDS = "any search words";
var STR_FORM_ALL_SEARCH_WORDS = "all search words";
var STR_FORM_DATE_FROM = "From:";
var STR_FORM_DATE_TO = "To:";
var STR_FORM_DATE_BUTTON = "&laquo;";
var STR_NO_QUERY = "No search query entered.";
var STR_RESULTS_FOR = "Search results for:";
var STR_RESULTS_IN_ALL_CATEGORIES = "in all categories";
var STR_RESULTS_IN_CATEGORY = "in category";
var STR_POWEREDBY = "Search powered by";
var STR_NO_RESULTS = "No results";
var STR_RESULT = "result";
var STR_RESULTS = "results";
var STR_PHRASE_CONTAINS_COMMON_WORDS = "Your search query contained too many common words to return the entire set of results available. Please try again with a more specific query for better results.";
var STR_SKIPPED_FOLLOWING_WORDS = "The following word(s) are in the skip word list and have been omitted from your search:";
var STR_SKIPPED_PHRASE = "Note that you can not search for exact phrases beginning with a skipped word";
var STR_SUMMARY_NO_RESULTS_FOUND = "No results found.";
var STR_SUMMARY_FOUND_CONTAINING_ALL_TERMS = "found containing all search terms.";
var STR_SUMMARY_FOUND_CONTAINING_SOME_TERMS = "found containing some search terms.";
var STR_SUMMARY_FOUND = "found.";
var STR_PAGES_OF_RESULTS = "pages of results.";
var STR_MORETHAN = "More than";
var STR_POSSIBLY_GET_MORE_RESULTS = "You can possibly get more results searching for";
var STR_ANY_OF_TERMS = "any of the terms";
var STR_ALL_CATS = "all categories";
var STR_CAT_SUMMARY = "Refine your search by category:";
var STR_DIDYOUMEAN = "Did you mean:";
var STR_OR = "or";
var STR_RECOMMENDED = "Recommended links";
var STR_SORTEDBY_RELEVANCE = "Sorted by relevance";
var STR_SORTBY_RELEVANCE = "Sort by relevance";
var STR_SORTBY_DATE = "Sort by date";
var STR_SORTEDBY_DATE = "Sorted by date &#9660;";
var STR_SORTEDBY_DATE_ASC = "Sorted by date &#9650;";
var STR_RESULT_TERMS_MATCHED = "Terms matched: ";
var STR_RESULT_SCORE = "Score: ";
var STR_RESULT_URL = "URL:";
var STR_RESULT_PAGES = "Result Pages:";
var STR_RESULT_PAGES_PREVIOUS = "Previous";
var STR_RESULT_PAGES_NEXT = "Next";
var STR_SEARCH_TOOK = "Search took";
var STR_SECONDS = "seconds";
var STR_MAX_RESULTS = "You have requested more results than served per query. Please try again with a more precise query.";
