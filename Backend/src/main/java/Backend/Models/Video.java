package Backend.Models;

public class Video {
    private int vidID;
    private String title;
    private String vidURL;

    public Video() {
    }

    public Video(int vidID, String title, String vidURL) {
        this.vidID = vidID;
        this.title = title;
        this.vidURL = vidURL;
    }

    public int getVidID() {
        return vidID;
    }

    public void setVidID(int vidID) {
        this.vidID = vidID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {this.title = title;}

    public String getVidURL() {
        return vidURL;
    }

    public void setVidURL(String vidURL) {
        this.vidURL = vidURL;
    }
}
