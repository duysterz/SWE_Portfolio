package Backend.Models;

public class Photo {
    private int photoID;
    private String title;
    private String photoURL;

    public Photo() {
    }

    public Photo(int photoID, String title, String photoURL) {
        this.photoID = photoID;
        this.title = title;
        this.photoURL = photoURL;
    }

    public int getPhotoID() {
        return photoID;
    }

    public void setPhotoID(int photoID) {
        this.photoID = photoID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPhotoURL() {
        return photoURL;
    }

    public void setPhotoURL(String photoURL) {
        this.photoURL = photoURL;
    }
}
