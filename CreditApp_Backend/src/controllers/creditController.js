exports.resolveIssue = (req, res) => {
    const { bureau, report } = req.body;

    // Dummy logic for resolving credit issues
    if (bureau && report) {
        return res.status(200).json({ message: 'Issue resolved with the bureau', bureau });
    } else if (!report) {
        return res.status(400).json({ message: 'No report provided, please register to get a new one' });
    } else {
        return res.status(400).json({ message: 'Invalid input' });
    }
};