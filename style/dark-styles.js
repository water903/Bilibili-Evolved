(() =>
{
    return (settings, resources) =>
    {
        if (settings.useNewStyle)
        {
            const styles = resources.getStyle("darkStyle", "bilibili-new-style-dark");
            $("#bilibili-new-style-dark").remove();
            $("body").after(styles);
        }
    };
})();