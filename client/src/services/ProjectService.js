export const _loadProjects = () => {
	return fetch("/Projects", {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
}

export const _createProject = (name, description, image, github, launchapp) => {
	return fetch("/Projects", {
	    method: 'POST',
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({name, description, image, github, launchapp})
	  }).then(res => res.json())
}

export const _updateProject = (updatedId, name, description, image, github, launchapp) => {
	return fetch(`/Projects/update/${updatedId}`, {
	    method: 'POST',
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({name, description, image, github, launchapp})
	  }).then(res => res.json())
}

export const _deleteProject = (id) => {
    return fetch(`/Projects/${id}`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
	    body: JSON.stringify({})
      }).then(res => res.json())
}

