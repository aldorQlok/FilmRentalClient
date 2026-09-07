import { useState } from 'react';
import axios from 'axios';

export default function MovieCreate() {

    const [title, setTitle] = useState('');
    //formulär kommer skicka in värdet som string ändå.
    const [releaseYear, setReleaseYear] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // parseInt omvandlar värdet till ett integer.
            const newMovie = { title, releaseYear: parseInt(releaseYear) }
            await axios.post('https://localhost:7063/api/Movies', newMovie)
            setTitle('');
            setReleaseYear('');
        } catch (error) {
            console.log('Error creating movie:', error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Movie Title:</label>
                <input
                    id='title'
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />

                <label htmlFor='releaseYear'>Release Year:</label>
                <input
                    id='releaseYear'
                    type="number"
                    value={releaseYear}
                    onChange={e => setReleaseYear(e.target.value)}
                    required
                />
                <button type='submit'>Create Movie</button>
            </form>
        </div>
    )
}