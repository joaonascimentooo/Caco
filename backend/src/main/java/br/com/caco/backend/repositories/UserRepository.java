package br.com.caco.backend.repositories;

import br.com.caco.backend.models.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends BaseRepository<User, String> {
}
