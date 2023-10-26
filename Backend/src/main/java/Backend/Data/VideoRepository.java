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
        String sql = "SELECT * FROM videos";
        return jdbcTemplate.query(sql, new VideoRowMapper());
    }

    public int insert(Video video) {
        String sql = "INSERT INTO videos (Description, VidURL) VALUES (?, ?)";
        return jdbcTemplate.update(sql, video.getDescription(), video.getVidURL());
    }

    public int deleteById(int VidID) {
        String sql = "DELETE FROM videos WHERE VidID = ?";
        return jdbcTemplate.update(sql, VidID);
    }

    public int update(Video video) {
        String sql = "UPDATE videos SET Description = ?, VidURL = ? WHERE VidID = ?";
        return jdbcTemplate.update(sql, video.getDescription(), video.getVidURL(), video.getVidID());
    }

    private static final class VideoRowMapper implements RowMapper<Video> {
        public Video mapRow(ResultSet rs, int rowNum) throws SQLException {
            Video video = new Video();
            video.setVidID(rs.getInt("VidID"));
            video.setDescription(rs.getString("Description"));
            video.setVidURL(rs.getString("VidURL"));
            return video;
        }
    }
}
