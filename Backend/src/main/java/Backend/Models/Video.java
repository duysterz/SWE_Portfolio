package Backend.Models;

public class Video {
    private int vidID;
    private String description;
    private String vidURL;

    public Video() {
    }

    public Video(int vidID, String description, String vidURL) {
        this.vidID = vidID;
        this.description = description;
        this.vidURL = vidURL;
    }

    public int getVidID() {
        return vidID;
    }

    public void setVidID(int vidID) {
        this.vidID = vidID;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVidURL() {
        return vidURL;
    }

    public void setVidURL(String vidURL) {
        this.vidURL = vidURL;
    }
}
