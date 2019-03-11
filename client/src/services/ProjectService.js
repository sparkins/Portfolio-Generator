export const _loadProjects = () => {
	return fetch("http://localhost:3001/Projects", {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
}

export const _createProject = (name, description, image, github, launchapp, token) => {
	return fetch("http://localhost:3001/Projects", {
	    method: 'POST',
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({name, description, image, github, launchapp, token})
	  }).then(res => res.json())
}

export const _updateProject = (updatedId, name, description, image, github, launchapp, token) => {
	return fetch(`http://localhost:3001/Projects/update/${updatedId}`, {
	    method: 'POST',
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({name, description, image, github, launchapp, token})
	  }).then(res => res.json())
}

export const _deleteProject = (id, token) => {
    return fetch(`http://localhost:3001/Projects/${id}`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
	    body: JSON.stringify({token})
      }).then(res => res.json())
}

