package Backend.Services;

import Backend.Models.StockWrapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class StockServiceTest
{
    @Autowired
    private StockService stockService;
    @Test
    void invoke ()
    {
        final StockWrapper stock = stockService.findStock("SPY.L");
        System.out.println(stock.getStock());
    }

}