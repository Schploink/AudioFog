export const fetchSounds = () => {
  return $.ajax({
    method: "GET",
      url: "/api/sounds",
    error: (err) => console.log(err)
  })
}

export const fetchSound = soundId => (
  $.ajax({
    url: `api/sounds/${soundId}`,
    method: "GET"
  })
);

export const createSound = sound => (
  $.ajax({
    url: `api/sounds`,
    method: 'POST',
    data: {sound}
  })
);

export const updateSound = sound => (
  $.ajax({
    url: `api/sounds`,
    method: 'PATCH',
    data: {sound}
  })
);

export const destroySound = soundId => (
  $.ajax({
    url: `api/sounds/${soundId}`,
    method: 'DELETE'
  })
);
