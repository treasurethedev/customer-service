import Faq from "react-faq-component";
function FAQs() {
	const data = {
		// title: "FAQ (How it works)",
		rows: [
			{
				title: "Lorem ipsum dolor sit amet,",
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
			},
			{
				title: "Nunc maximus, magna at ultricies elementum",
				content:
					"Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
			},
			{
				title: "Curabitur laoreet, mauris vel blandit fringilla",
				content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
			},
			{
				title: "What is the package version",
				content: <p>current version is 1.2.1</p>,
			},
		],
	};
	const styles = {
		bgColor: "transparent",
		titleTextColor: "blue",
		rowTitleColor: "#06b6d4",
		rowContentColor: '#334155',
		arrowColor: "#334155",
	};

	const config = {
		// animate: true,
		// arrowIcon: "V",
		// tabFocus: true
	};
	return (
		<div className="space-y-12">
            <h4 className="font-semibold text-center text-xl text-cyan-500">FAQs</h4>
			<div className="w-4/5 mx-auto max-w-3xl">
				<Faq data={data} styles={styles} config={config} />
			</div>
		</div>
	);
}

export default FAQs;
