package Backend.Services;

import Backend.Models.Photo;
import Backend.Data.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhotoService {

    @Autowired
    private PhotoRepository photoRepository;

    public List<Photo> getAllPhotos() {
        return photoRepository.findAll();
    }

    public int addPhoto(Photo photo) {
        return photoRepository.insert(photo);
    }

    public int deletePhoto(int photoID) {
        return photoRepository.deleteById(photoID);
    }

    public int updatePhoto(Photo photo) {
        return photoRepository.update(photo);
    }
}
