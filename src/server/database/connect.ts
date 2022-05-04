import * as mongoose from 'mongoose';

export const connect = (url: string, opts: mongoose.ConnectOptions = {}): Promise<typeof mongoose> => {
  console.log('connecting to ' + url);
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};