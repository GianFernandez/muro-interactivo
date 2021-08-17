import React, { useEffect, useState } from 'react';
import InteractionForm from './InteractionForm';
import { db } from '../firebaseConfig';

const Interaction = () => {
    const [interaction, setInteraction] = useState([])

    const addOrEdit = async (nameObject) => {
        await db.collection('interaction').doc().set(nameObject);
        console.log("new task added")
    };

    const getInteraction = async () => {
        db.collection('interaction').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setInteraction(docs);
        });
    };

    useEffect(() => {
        getInteraction();
    }, []);

    return (
        <div>
            <div className="col-md-12 p-2">
            <InteractionForm addOrEdit={addOrEdit} />
            </div>
            
            <div className="col-md-12 p-2">
                {interaction.map(interaction => (
                    <div className="card mb-1">
                        <div className="card-body">
                            <h4>{interaction.tittle}</h4>
                            <p>{interaction.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Interaction;