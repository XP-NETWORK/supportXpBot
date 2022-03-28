import { Document, model, Model, Schema } from "mongoose";
import { ObjectId } from "mongodb";
import { CustomDocumentBuild } from "./documentDefaults";


interface IConversation {
  type: 'user' | 'project';
  projectName?: string;
  walletAddress?:string;
  fullName?: string;
  telegram:string;
  stage: number
}

// Instance methods
export interface IConversationDocument extends IConversation, Document {
  toJSON();
}

// Static methods
export interface IConversationModel extends Model<IConversationDocument> {
  getById(to: ObjectId): Promise<IConversationDocument>;
  removeById(id: ObjectId): Promise<boolean>;
  updateById(id: ObjectId, doc: IConversation): Promise<IConversationDocument>;
  createNew(doc: IConversation): Promise<IConversationDocument>;
}

export const lasthash = {
  type: { type: Schema.Types.String, required: true },
  projectName: { type: Schema.Types.String },
  walletAddress: { type: Schema.Types.String },
  fullName: { type: Schema.Types.String },
  telegram: { type: Schema.Types.String, required: true },
  stage: {type: Schema.Types.Number, required: true, default: 0}
};

export const schema = CustomDocumentBuild(lasthash);


const Coversation: IConversationModel = model<IConversationDocument, IConversationModel>(
  "conversation",
  schema
);
export default Coversation;
export { IConversation };
