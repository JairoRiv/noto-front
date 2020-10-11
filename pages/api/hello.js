// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method === "POST") {
    res.statusCode = 200;
    res.json({ name: 'funciona' });
  }
};
