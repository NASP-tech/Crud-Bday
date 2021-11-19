import {Schema, model} from 'mongoose'

const bdaySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        description: {
            type: String,
            required: true
        },
        ideas: {
            type: String,
            required: true
        },
        done: {
            type: Boolean,
            default: false
        },
    }, 
    {
        timestamps: true,
        versionKey: false
    }
);

export default model("Bday", bdaySchema)