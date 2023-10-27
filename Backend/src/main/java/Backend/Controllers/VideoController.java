package Backend.Controllers;

import Backend.Models.Video;
import Backend.Services.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/video")
@CrossOrigin(origins = "http://localhost:3000")
public class VideoController {

    @Autowired
    private VideoService videoService;

    @GetMapping
    public List<Video> getAllVideos() {
        return videoService.getAllVideos();
    }

    @PostMapping
    public int addVideo(@RequestBody Video video) {
        return videoService.addVideo(video);
    }

    @DeleteMapping("/{vidID}")
    public int deleteVideo(@PathVariable int vidID) {
        return videoService.deleteVideo(vidID);
    }

    @PutMapping
    public int updateVideo(@RequestBody Video video) {
        return videoService.updateVideo(video);
    }
}
