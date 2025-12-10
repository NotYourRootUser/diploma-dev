// 1. Create a URL string
const url = "https://www.trademe.co.nz/a/marketplace/books/search?search_string=book";

// 2. Turn it into a URL object
const myUrl = new URL(url);

// 3. Log its properties
console.log("Full url:", myUrl.href);
console.log("Origin:", myUrl.origin);
console.log("Hostname:", myUrl.hostname);
console.log("Pathname:", myUrl.pathname);
console.log("Search:", myUrl.search);

// 4. Query parameters (structured object)
console.log("Search Params:", myUrl.searchParams);

// 5. Access a specific query value
console.log("search_string params:", myUrl.searchParams.get("search_string"));
