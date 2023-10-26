package Backend.Data;

import Backend.Models.Photo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class PhotoRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Photo> findAll() {
        // Updated SQL query to match SQL file
        String sql = "SELECT PhotoID, Title, PhotoURL FROM photos";
        return jdbcTemplate.query(sql, new PhotoRowMapper());
    }

    public int insert(Photo photo) {
        String sql = "INSERT INTO photos (Title, PhotoURL) VALUES (?, ?)";
        return jdbcTemplate.update(sql, photo.getTitle(), photo.getPhotoURL());
    }

    public int deleteById(int PhotoID) {
        String sql = "DELETE FROM photos WHERE PhotoID = ?";
        return jdbcTemplate.update(sql, PhotoID);
    }

    public int update(Photo photo) {

        String sql = "UPDATE photos SET Title = ?, PhotoURL = ? WHERE PhotoID = ?";
        return jdbcTemplate.update(sql, photo.getTitle(), photo.getPhotoURL(), photo.getPhotoID());
    }

    private static final class PhotoRowMapper implements RowMapper<Photo> {
        public Photo mapRow(ResultSet rs, int rowNum) throws SQLException {
            Photo photo = new Photo();
            photo.setPhotoID(rs.getInt("PhotoID"));
            photo.setTitle(rs.getString("Title"));  // Added line for Title
            photo.setPhotoURL(rs.getString("PhotoURL"));
            return photo;
        }
    }
}
