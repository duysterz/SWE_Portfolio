package Backend.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/stock")
@CrossOrigin(origins = "http://localhost:3000")
public class StockController {


    @GetMapping
    public ResponseEntity<Map<String, String>> getStockPrices() {
        String[] stockSymbols = {"AAPL", "MSFT"};
        String apiKey = "GQ3UN05QR06NPOSF";
        Map<String, String> stockPrices = new HashMap<>();

        RestTemplate restTemplate = new RestTemplate();
        for (String stockSymbol : stockSymbols) {
            String url = String.format("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=%s&interval=5min&apikey=%s", stockSymbol, apiKey);

            try {
                Map<String, Object> response = restTemplate.getForObject(url, Map.class);
                Map<String, Map<String, String>> timeSeries = (Map<String, Map<String, String>>) response.get("Time Series (5min)");
                String latestTime = timeSeries.keySet().iterator().next();
                String latestPrice = timeSeries.get(latestTime).get("4. close");
                stockPrices.put(stockSymbol, latestPrice);
            } catch (Exception e) {
                return ResponseEntity.status(500).body(null);
            }
        }
        return ResponseEntity.ok(stockPrices);
    }
}