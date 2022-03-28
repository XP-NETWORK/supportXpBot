import { Document, model, Schema  } from 'mongoose';
import { ObjectId } from 'mongodb';
/**
 * Adds Custom CRUD to a document schema: createNew, getById, removeById, updateById
 * @param custDoc - a mongo document
 * @returns custom CRUD document schema
 */
export const CustomDocumentBuild = (custDoc: any) => {
    var schema: Schema = new Schema(custDoc,
        {
            timestamps: {
                createdAt: 'createdAt',
                updatedAt: 'updatedAt'
            }
        })
    schema.index({ '$**': 'text' })
    schema.set('toJSON', {
        transform(doc: any, ret: any) {
            delete ret.__v
        },
    })
    schema.set('toObject', {
        transform(doc: any, ret: any) {
            delete ret.__v
        },
    })
    /**
     * Saves the document data to MongoDB
     * @param {*} newDocument - a new Object
     * @returns the saved Store
     */
    schema.statics.createNew = async function createNew(newDocument: any) {
        return new this(newDocument).save();
    };

    /**
     * Looks up a Document in the DB
     * @param {ObjectId} _id a Document ID
     * @returns a Document if one is found by ID
     */
    schema.statics.getById = async function getById(_id: ObjectId) {
        const query = this.findOne({ _id });
        return query.exec().then((doc: any) => (doc ? doc : undefined));
    };

    /**
     * Checks whether a given _id exists in the DB and deletes the Document with the _id
     * @param _id a Document ID
     * @returns true in case of success and false otherwise
     */
    schema.statics.removeById = async function removeById(_id: ObjectId) {
        return new Promise(async (res, rej) => {
            const query = this.findOneAndRemove({ _id })
            query.exec().then((err: any, r: any) => {
                if(err || !r) rej()
                else res(true)
            })
        })

    }
    /**
     * Updates a document in the DB of one is found by ID
     * @param id - document object ID
     * @param updatedDocument - document with updated fields
     */
    schema.statics.updateById = async function updateById(_id: ObjectId, updatedDocument: any) {
        console.log(updatedDocument, 'lalsldaslda')
        return new Promise((res, rej) => {
           const query = this.updateOne({ _id }, updatedDocument, { new: true })
           query.exec().then((r: any, err: any) => {
               if(err || !r) rej()
               else res(r)

           })
        })

    }

    return schema;
}
