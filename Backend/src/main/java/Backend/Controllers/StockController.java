package Backend.Controllers;

import Backend.Models.StockWrapper;
import Backend.Services.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@RestController
public class StockController {

    @Autowired
    private StockService stockService;

    @GetMapping("/stocks")
    public List<StockWrapper> getStockPrices() throws IOException {
        List<String> tickers = Arrays.asList("AAPL", "GOOGL", "MSFT", "SPY");  // tikers here?
        return stockService.findStocks(tickers);
    }
}
