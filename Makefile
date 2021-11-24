all: resume.pdf cv.pdf

%.pdf: %.tex
	pdflatex $^

clean:
	rm -rf resume.aux  resume.log  resume.out
	rm -rf cv.aux  cv.log  cv.out
