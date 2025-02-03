import { useState, useEffect } from "react";

const QuotesSection = () => {
  const [quote, setQuote] = useState({
    quote:
      "There's a seat waiting for you, at the tables you haven't seen yet.",
    author: "Unknown",
  });
  const [isLoading, setIsLoading] = useState(true);

  const MIN_QUOTE_LENGTH = 60;
  const MAX_QUOTE_LENGTH = 140;
  // Set refresh interval to 2 minutes
  const QUOTE_REFRESH_INTERVAL = 2 * 60 * 1000; // 2 minutes

  const defaultQuotes = [
    {
      quote:
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote:
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "Keep your face always toward the sunshine and shadows will fall behind you.",
      author: "Walt Whitman",
    },
    {
      quote:
        "Since light travels faster than sound, some people appear bright until you hear them speak.",
      author: "Alan Dundes",
    },
  ];

  // Sanitize the incoming quote text
  const sanitizeQuote = (text) => {
    return text.endsWith('"') && !text.includes('"') ? text.slice(0, -1) : text;
  };

  // Try to fetch a new quote from the API
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://quotes-api-self.vercel.app/quote/");
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      const sanitizedQuote = sanitizeQuote(data.quote);

      if (
        sanitizedQuote.length + data.author.length >= MIN_QUOTE_LENGTH &&
        sanitizedQuote.length + data.author.length <= MAX_QUOTE_LENGTH
      ) {
        setQuote({ quote: sanitizedQuote, author: data.author });
        localStorage.setItem(
          "currentQuote",
          JSON.stringify({ quote: sanitizedQuote, author: data.author })
        );
        localStorage.setItem("lastQuoteUpdate", Date.now().toString());
      } else {
        // If the quote doesn't meet the criteria, try again
        fetchQuote();
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
      // If fetching fails (e.g. no internet), use the default quote logic
      setDefaultQuote();
    } finally {
      setIsLoading(false);
    }
  };

  // Set a default quote from the defaultQuotes array.
  // This is used as a fallback when offline.
  const setDefaultQuote = () => {
    let defaultQuoteIndex =
      parseInt(localStorage.getItem("defaultQuoteIndex")) || 0;
    const fallback = defaultQuotes[defaultQuoteIndex];
    defaultQuoteIndex = (defaultQuoteIndex + 1) % defaultQuotes.length;

    localStorage.setItem("defaultQuoteIndex", defaultQuoteIndex.toString());
    localStorage.setItem("currentQuote", JSON.stringify(fallback));
    localStorage.setItem("lastQuoteUpdate", Date.now().toString());

    setQuote(fallback);
  };

  useEffect(() => {
    // This function checks whether it is time to update the quote.
    const checkAndUpdateQuote = () => {
      const lastUpdated =
        parseInt(localStorage.getItem("lastQuoteUpdate")) || 0;
      const now = Date.now();

      if (navigator.onLine) {
        // If online, refresh the quote if the interval has passed
        if (now - lastUpdated >= QUOTE_REFRESH_INTERVAL) {
          fetchQuote();
        } else {
          // Otherwise, load the stored quote if available
          const storedQuote = localStorage.getItem("currentQuote");
          if (storedQuote) {
            setQuote(JSON.parse(storedQuote));
            setIsLoading(false);
          } else {
            fetchQuote();
          }
        }
      } else {
        // Offline: Use the stored quote if available, otherwise set a default quote
        const storedQuote = localStorage.getItem("currentQuote");
        if (storedQuote) {
          setQuote(JSON.parse(storedQuote));
        } else {
          setDefaultQuote();
        }
        setIsLoading(false);
      }
    };

    // Check immediately on mount
    checkAndUpdateQuote();
    // Then check every second so the refresh happens live as soon as the interval is reached
    const interval = setInterval(checkAndUpdateQuote, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="qoutes-container">
      <span className="qoute-font">&ldquo;</span>
      <div className="qoutes">
        <p>
          <i>{!isLoading && quote.quote}</i>
        </p>
        {quote.author && <p className="author">-{quote.author}</p>}
      </div>
      <span className="qoute-font">&rdquo;</span>
    </div>
  );
};

export default QuotesSection;
