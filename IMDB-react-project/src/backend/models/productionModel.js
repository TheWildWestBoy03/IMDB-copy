import mongoose, { mongo } from "mongoose";


const genresSchema = mongoose.Schema({
    'id': {
        type: Number,
        required: true,
    },
    'name': {
        type: String,
        default: null
    }
})

const productionCompanySchema = mongoose.Schema({
    'id': {
        type: Number,
        required: true,
    },
    "logo_path": {
        type: String,
    },
    "name": {
        type: String,
        default: null,
    },
    "origin_country": {
        type: String,
    }
})

const productionCountrySchema = mongoose.Schema({
    "iso_3166_1": {
        type: String,
        required: true,
    },
    "name": {
        type: String,
        default: null,
    }
})

const spokenLanguageSchema = mongoose.Schema({
    "english_name": {
        type: String,
        required: true
    },
    "iso_639_1": {
        type: String,
        required: true
    },
    "name": {
        type: String,
        default: null,
    }
})

const collectionSchema = mongoose.Schema({
    "id": {
        type: Number,
    },
    "name": {
        type: String,
        default: null,
    },
    "poster_path": {
        type: String,
        default: null,
    },
    "backdrop_path": {
        type: String,
        default: null,
    }
})

const productionSchema = mongoose.Schema({
    "adult": {
        type: Boolean,
        required: true,
    },
    "backdrop_path": {
        type: String,
        default: null,
    },
    "belongs_to_collection": {
        type: collectionSchema,
        default: null,
    },
    "budget": {
        type: Number,
        required: true,
    },
    "genres": {
        type: [genresSchema],
        default: [],
    },
    "homepage": {
        type: String
    },
    "id": {
        type: Number,
        required: true,
    },
    "imdb_id": {
        type: String,
    },
    "origin_country": {
        type: [String]
    },
    "original_language": {
        type: String,
    },
    "original_title": {
        type: String,
    },
    "overview": {
        type: String,
        default: null,
    },
    "popularity": {
        type: Number,
    },
    "poster_path": {
        type: String,
        default: null,
    },
    "production_companies": {
        type: [productionCompanySchema],
        required: true,
    },
    "production_countries": {
        type: [productionCountrySchema],
        required: true
    },
    "release_date": {
        type: String,
        required: true
    },
    "revenue": {
        type: Number,
    },
    "runtime": {
        type: Number,
    },
    "spoken_languages": {
        type: [spokenLanguageSchema]
    },
    "status": {
        type: String,
    },
    "tagline": {
        type: String,
    },
    "title": {
        type: String,
    },
    "video": {
        type: Boolean
    },
    "vote_average": {
        type: Number,
    },
    "vote_count": {
        type: Number,
    }
});

export const Production = mongoose.model("Production", productionSchema);