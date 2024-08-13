const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {}

Endereco.init({
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Logradouro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Complemento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    MunicipioIBGE: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Endereco',
    tableName: 'enderecos', // Define o nome da tabela no banco de dados
    timestamps: true, // Define se quer ou não os campos createdAt e updatedAt
});

module.exports = Endereco;
