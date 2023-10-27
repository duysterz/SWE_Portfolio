package Backend.Data;

import Backend.Models.Video;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class VideoRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Video> findAll() {
        String sql = "SELECT VidID, VidURL, Title FROM videos";
        return jdbcTemplate.query(sql, new VideoRowMapper());
    }

    public int insert(Video video) {
        String sql = "INSERT INTO videos (VidURL, Title) VALUES (?, ?)";
        return jdbcTemplate.update(sql, video.getTitle(), video.getVidURL());
    }

    public int deleteById(int VidID) {
        String sql = "DELETE FROM videos WHERE VidID = ?";
        return jdbcTemplate.update(sql, VidID);
    }

    public int update(Video video) {
        String sql = "UPDATE videos SET Title = ?, VidURL = ? WHERE VidID = ?";
        return jdbcTemplate.update(sql, video.getTitle(), video.getVidURL(), video.getVidID());
    }

    private static final class VideoRowMapper implements RowMapper<Video> {
        public Video mapRow(ResultSet rs, int rowNum) throws SQLException {
            Video video = new Video();
            video.setVidID(rs.getInt("VidID"));
            video.setVidURL(rs.getString("VidURL"));
            video.setTitle(rs.getString("Title"));
            return video;
        }
    }
}
