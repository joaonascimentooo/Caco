package br.com.caco.backend.models;

import br.com.caco.backend.core.common.Auditable;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User extends Auditable {

    private String name;

    private String email;

    private String password;
}
