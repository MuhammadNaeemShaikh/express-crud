const sign_up = (req, res) => {
  try {
    const {} = req.body;
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `Something Went Wrong ${error}`,
    });
  }
};
