export const SHOW_GISTS = 'SHOW_GISTS'

export function showGists () {
  const gists = [
    { id: 2, description: 'Redux starter kit' },
    { id: 4, description: 'React fatigue it is really ?' }
  ]

  return {
    type: SHOW_GISTS,
    payload: gists
  }
}
