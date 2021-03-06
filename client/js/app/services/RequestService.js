import { serviceConfig as config }  from './serviceConfig.js'

export const RequestService = {

    location: config.location.dev,

    update(id, data) {

        const requestOptions = {

            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                id: id,
                name: data.name,
                email: data.email,
                gender: data.gender,
                status: data.status
            })
        }

        return fetch(`${this.location}/add-user.html`, requestOptions)
            .then(response =>

                response.ok ? Promise.resolve(response.body) : Promise.reject(response.statusText)
            )
    },

    delete(id) {

        const requestOptions = {

            method: 'DELETE'
        }

        return fetch(`${this.location}/${id}`, requestOptions)
            .then(response =>
                response.ok ? Promise.resolve(response.body) : Promise.reject(response.statusText)
            )
    }
}



