package Backend.Services;

import Backend.Models.Video;
import Backend.Data.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoService {

    @Autowired
    private VideoRepository videoRepository;

    public List<Video> getAllVideos() {
        return videoRepository.findAll();
    }

    public int addVideo(Video video) {
        return videoRepository.insert(video);
    }

    public int deleteVideo(int vidID) {
        return videoRepository.deleteById(vidID);
    }

    public int updateVideo(Video video) {
        return videoRepository.update(video);
    }
}
