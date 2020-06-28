import mongoose, { Schema, Document } from 'mongoose';

export interface ICounter extends Document {
    date: string
}

const CounterSchema: Schema = new Schema({
    date: {
        type: String,
        default: new Date().toISOString().toString(),
    },
});

// Export the model and return your IChats interface
export default mongoose.model<ICounter>('Counter', CounterSchema);
