package Backend.Controllers;

import Backend.Models.Photo;
import Backend.Services.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/photo")
@CrossOrigin(origins = "http://localhost:3000")
// THIS CORS CONFIGURED MESSED ME UPPP
public class PhotoController {

    @Autowired
    private PhotoService photoService;

    @GetMapping
    public List<Photo> getAllPhotos() {
        return photoService.getAllPhotos();
    }

    @PostMapping
    public int addPhoto(@RequestBody Photo photo) {
        return photoService.addPhoto(photo);
    }

    @DeleteMapping("/{photoID}")
    public int deletePhoto(@PathVariable int photoID) {
        return photoService.deletePhoto(photoID);
    }

    @PutMapping
    public int updatePhoto(@RequestBody Photo photo) {
        return photoService.updatePhoto(photo);
    }
}
