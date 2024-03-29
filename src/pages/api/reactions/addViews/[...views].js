import executeQuery from '@/Config/db4';

export default async function deleteVideo(req, res) {
  // Récupérez l'ID de la vidéo à supprimer à partir des paramètres de la requête
  const view = req.query.views
  try {

    // Exécutez la requête SQL pour supprimer la like dans la base de données
    const rows = await executeQuery('CALL addview(?,?)', view)

    res.status(200).json(rows);
  } catch (error) {
    console.error('error', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}