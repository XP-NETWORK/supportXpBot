import { Document, model, Model, Schema } from "mongoose";
import { ObjectId } from "mongodb";
import { CustomDocumentBuild } from "./documentDefaults";


interface IConversation {
  type: 'user' | 'project';
  ProjectName?: string;
  walletAddress?:string;
  ProjectWebsite? :string;
  email?: string;
  ContactName?: string;
  IssueDescr?: string;
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

export const doc = {
  type: { type: Schema.Types.String, required: true },
  ProjectName: { type: Schema.Types.String },
  ProjectWebsite: { type: Schema.Types.String },
  walletAddress: { type: Schema.Types.String },
  ContactName: { type: Schema.Types.String },
  email: { type: Schema.Types.String },
  IssueDescr: { type: Schema.Types.String },
  telegram: { type: Schema.Types.String, required: true },
  stage: {type: Schema.Types.Number, required: true, default: 0}
};

export const schema = CustomDocumentBuild(doc);


const Coversation: IConversationModel = model<IConversationDocument, IConversationModel>(
  "conversation",
  schema
);
export default Coversation;
export { IConversation };
